import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from "@mui/material";
import { SERVER_URL } from "../../constants/server_url";

const StaffModal = ({ open, handleClose, employee = null, onSaved, employees = [] }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        email: employee.email,
        phone: employee.phone_number,
      });
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      });
    }
  }, [employee]);

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
  
    const emailTrimmed = formData.email.trim().toLowerCase();
    const phoneTrimmed = formData.phone.trim();
  
    if (!formData.first_name.trim()) {
      newErrors.first_name = "The first name is required.";
    }
  
    if (!formData.last_name.trim()) {
      newErrors.last_name = "The last name is required.";
    }
  
    if (!emailTrimmed) {
      newErrors.email = "The email is required.";
    } else if (!/\S+@\S+\.\S+/.test(emailTrimmed)) {
      newErrors.email = "Invalid email format.";
    } else if (!/@(gmail\.com|yahoo\.com|outlook\.com)$/i.test(emailTrimmed)) {
      newErrors.email = "Allowed domains: gmail.com, yahoo.com, outlook.com.";
    } else if (
      employees.some(
        (emp) => emp.email.toLowerCase() === emailTrimmed && emp.id !== employee?.id
      )
    ) {
      newErrors.email = "This email is already in use.";
    }
    if (!phoneTrimmed) {
      newErrors.phone = "The phone number is required.";
    } else if (!/^[0-9+\-\(\)\s]*$/.test(phoneTrimmed)) {
      newErrors.phone = "The number can contain only digits, +, -, spaces, and parentheses.";
    } else if (phoneTrimmed.length < 10 || phoneTrimmed.length > 15) {
      newErrors.phone = "The number must be between 10 and 15 characters long.";
    } else if (
      employees.some(
        (emp) => emp.phone_number === phoneTrimmed && emp.id !== employee?.id
      )
    ) {
      newErrors.phone = "This phone number is already in use.";
    }    
  
    return newErrors;
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const token = localStorage.getItem("token");

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email,
      phone_number: formData.phone,
      role: employee?.role || "staff",
      password: "staff1234"
    };

    try {
      if (employee && employee.id) {
        await axios.put(`${SERVER_URL}/employees/${employee.id}`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        await axios.post(`${SERVER_URL}/employees`, payload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      setFormData({ first_name: "", last_name: "", email: "", phone: "" });
      setErrors({});
      handleClose();
      onSaved?.();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth="sm">
      <DialogTitle>{employee ? "Edit employee" : "Add employee"}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, overflow: "visible" }}>
        <TextField
          label="Prenume"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          error={!!errors.first_name}
          helperText={errors.first_name}
          required
          fullWidth
          
        />
        <TextField
          label="Nume"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          error={!!errors.last_name}
          helperText={errors.last_name}
          required
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
          fullWidth
        />
        <TextField
          label="Telefon"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          required
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Anulează</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {employee ? "Salvează" : "Adaugă"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StaffModal;

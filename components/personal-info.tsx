import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState, useEffect } from 'react'

export default function PersonalInfo({ 
  updateFormData, 
  updateStepValidity 
}: { 
  updateFormData: (stepName: string, data: object) => void,
  updateStepValidity: (isValid: boolean) => void
}) {
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    resume: null as File | null
  })

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    resume: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === 'resume' && files) {
      setFormFields(prev => ({ ...prev, [name]: files[0] }))
      updateFormData('personalInfo', { [name]: files[0] })
    } else {
      setFormFields(prev => ({ ...prev, [name]: value }))
      updateFormData('personalInfo', { [name]: value })
    }
  }

  const validateForm = () => {
    let isValid = true
    let newErrors = {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      resume: ''
    }

    if (!formFields.fullName) {
      newErrors.fullName = 'Full name is required'
      isValid = false
    }

    if (!formFields.email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!formFields.phone) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    }
    if (!formFields.password) {
        newErrors.password = 'Password is required'
        isValid = false
      }

    if (!formFields.resume) {
      newErrors.resume = 'Resume is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  useEffect(() => {
    const isValid = validateForm()
    updateStepValidity(isValid)
  }, [formFields])

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName" 
          name="fullName" 
          value={formFields.fullName}
          onChange={handleChange} 
          required 
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={formFields.email}
          onChange={handleChange} 
          required 
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          value={formFields.phone}
          onChange={handleChange} 
          required 
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          name="password" 
          value={formFields.password}
          onChange={handleChange} 
          required 
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>
      <div>
        <Label htmlFor="resume">Resume</Label>
        <Input 
          id="resume" 
          name="resume" 
          type="file" 
          onChange={handleChange} 
          accept=".pdf,.doc,.docx" 
          required 
        />
        {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
      </div>
    </div>
  )
}


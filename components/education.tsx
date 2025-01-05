import { useState, useEffect } from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function Education({ 
  updateFormData, 
  updateStepValidity 
}: { 
  updateFormData: (stepName: string, data: object) => void,
  updateStepValidity: (isValid: boolean) => void
}) {
  const [formFields, setFormFields] = useState({
    institution: '',
    degree: '',
    graduationYear: ''
  })

  const [errors, setErrors] = useState({
    institution: '',
    degree: '',
    graduationYear: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields(prev => ({ ...prev, [name]: value }))
    updateFormData('education', { [name]: value })
  }

  const handleSelectChange = (value: string) => {
    setFormFields(prev => ({ ...prev, degree: value }))
    updateFormData('education', { degree: value })
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      institution: '',
      degree: '',
      graduationYear: ''
    }

    if (!formFields.institution) {
      newErrors.institution = 'Institution is required'
      isValid = false
    }

    if (!formFields.degree) {
      newErrors.degree = 'Degree is required'
      isValid = false
    }

    if (!formFields.graduationYear) {
      newErrors.graduationYear = 'Graduation year is required'
      isValid = false
    } else if (isNaN(Number(formFields.graduationYear)) || Number(formFields.graduationYear) < 1900 || Number(formFields.graduationYear) > 2099) {
      newErrors.graduationYear = 'Please enter a valid year between 1900 and 2099'
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
        <Label htmlFor="institution">Institution</Label>
        <Input 
          id="institution" 
          name="institution" 
          value={formFields.institution}
          onChange={handleChange} 
          required 
        />
        {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
      </div>
      <div>
        <Label htmlFor="degree">Qualification</Label>
        <Select onValueChange={handleSelectChange} value={formFields.degree}>
          <SelectTrigger>
            <SelectValue placeholder="Select degree" />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="lgcse">LGCSE</SelectItem>
          <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="bachelor">Bachelors</SelectItem>
            <SelectItem value="master">Masters</SelectItem>
            <SelectItem value="phd">Ph.D.</SelectItem>
          </SelectContent>
        </Select>
        {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
      </div>
      <div>
        <Label htmlFor="graduationYear">Completion year</Label>
        <Input 
          id="graduationYear" 
          name="graduationYear" 
          type="number" 
          min="1900" 
          max="2099" 
          value={formFields.graduationYear}
          onChange={handleChange} 
          required 
        />
        {errors.graduationYear && <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>}
      </div>
    </div>
  )
}


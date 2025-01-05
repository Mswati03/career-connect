import { useState, useEffect } from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function WorkExperience({ 
  updateFormData, 
  updateStepValidity 
}: { 
  updateFormData: (stepName: string, data: object) => void,
  updateStepValidity: (isValid: boolean) => void
}) {
  const [formFields, setFormFields] = useState({
    company: '',
    jobTitle: '',
    duration: '',
    responsibilities: ''
  })

  const [errors, setErrors] = useState({
    company: '',
    jobTitle: '',
    duration: '',
    responsibilities: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormFields(prev => ({ ...prev, [name]: value }))
    updateFormData('workExperience', { [name]: value })
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      company: '',
      jobTitle: '',
      duration: '',
      responsibilities: ''
    }

    if (!formFields.company) {
      newErrors.company = 'Company is required'
      isValid = false
    }

    if (!formFields.jobTitle) {
      newErrors.jobTitle = 'Job title is required'
      isValid = false
    }

    if (!formFields.duration) {
      newErrors.duration = 'Duration is required'
      isValid = false
    } else if (isNaN(Number(formFields.duration)) || Number(formFields.duration) < 0) {
      newErrors.duration = 'Please enter a valid duration'
      isValid = false
    }

    if (!formFields.responsibilities) {
      newErrors.responsibilities = 'Responsibilities are required'
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
        <Label htmlFor="company">Most Recent Company</Label>
        <Input 
          id="company" 
          name="company" 
          value={formFields.company}
          onChange={handleChange} 
          required 
        />
        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
      </div>
      <div>
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input 
          id="jobTitle" 
          name="jobTitle" 
          value={formFields.jobTitle}
          onChange={handleChange} 
          required 
        />
        {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
      </div>
      <div>
        <Label htmlFor="duration">Duration (years)</Label>
        <Input 
          id="duration" 
          name="duration" 
          type="number" 
          min="0" 
          step="0.5" 
          value={formFields.duration}
          onChange={handleChange} 
          required 
        />
        {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
      </div>
      <div>
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea 
          id="responsibilities" 
          name="responsibilities" 
          value={formFields.responsibilities}
          onChange={handleChange} 
          required 
        />
        {errors.responsibilities && <p className="text-red-500 text-sm mt-1">{errors.responsibilities}</p>}
      </div>
    </div>
  )
}


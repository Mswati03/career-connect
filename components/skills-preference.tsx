import { useState, useEffect } from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"

export default function SkillsPreferences({ 
  updateFormData, 
  updateStepValidity 
}: { 
  updateFormData: (stepName: string, data: object) => void,
  updateStepValidity: (isValid: boolean) => void
}) {
  const [formFields, setFormFields] = useState({
    skills: '',
    desiredPosition: '',
    expectedSalary: '',
    remoteWork: false,
    relocation: false
  })

  const [errors, setErrors] = useState({
    skills: '',
    desiredPosition: '',
    expectedSalary: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields(prev => ({ ...prev, [name]: value }))
    updateFormData('skillsPreferences', { [name]: value })
  }

  const handleCheckboxChange = (checked: boolean, name: string) => {
    setFormFields(prev => ({ ...prev, [name]: checked }))
    updateFormData('skillsPreferences', { [name]: checked })
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      skills: '',
      desiredPosition: '',
      expectedSalary: ''
    }

    if (!formFields.skills) {
      newErrors.skills = 'Skills are required'
      isValid = false
    }

    if (!formFields.desiredPosition) {
      newErrors.desiredPosition = 'Desired position is required'
      isValid = false
    }

    if (!formFields.expectedSalary) {
      newErrors.expectedSalary = 'Expected salary is required'
      isValid = false
    } else if (isNaN(Number(formFields.expectedSalary)) || Number(formFields.expectedSalary) < 0) {
      newErrors.expectedSalary = 'Please enter a valid salary'
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
        <Label htmlFor="skills">Key Skills (comma-separated)</Label>
        <Input 
          id="skills" 
          name="skills" 
          value={formFields.skills}
          onChange={handleChange} 
          required 
        />
        {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
      </div>
      <div>
        <Label htmlFor="desiredPosition">Desired Position</Label>
        <Input 
          id="desiredPosition" 
          name="desiredPosition" 
          value={formFields.desiredPosition}
          onChange={handleChange} 
          required 
        />
        {errors.desiredPosition && <p className="text-red-500 text-sm mt-1">{errors.desiredPosition}</p>}
      </div>
      <div>
        <Label htmlFor="expectedSalary">Expected Salary</Label>
        <Input 
          id="expectedSalary" 
          name="expectedSalary" 
          type="number" 
          min="0" 
          value={formFields.expectedSalary}
          onChange={handleChange} 
          required 
        />
        {errors.expectedSalary && <p className="text-red-500 text-sm mt-1">{errors.expectedSalary}</p>}
      </div>
      <div className="space-y-2">
        <Label>Job Preferences</Label>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remoteWork" 
            checked={formFields.remoteWork}
            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, 'remoteWork')} 
          />
          <label htmlFor="remoteWork" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Remote Work
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="relocation" 
            checked={formFields.relocation}
            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, 'relocation')} 
          />
          <label htmlFor="relocation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Willing to Relocate
          </label>
        </div>
      </div>
    </div>
  )
}


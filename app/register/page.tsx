'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Education from '@/components/education'
import PersonalInfo from '@/components/personal-info'
import SkillsPreferences from '@/components/skills-preference'
import WorkExperience from '@/components/work-experience'
import { useFormState } from 'react-dom'

interface FormState {
  success: boolean;
  message: string;
}
import { registerUser } from '../actions/register'



export default function RegisterPage() {
  
const steps = ['Personal Info', 'Education', 'Work Experience', 'Skills & Preferences']
const [state, formAction] = useFormState((_state: FormState, payload: any) => registerUser(payload), { success: false, message: '' })
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    workExperience: {},
    skillsPreferences: {}
  })
  const [isStepValid, setIsStepValid] = useState(false)

  const handleNext = () => {
    if (isStepValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setIsStepValid(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData)
  }

  const updateFormData = (stepName: string, data: object) => {
    setFormData({ ...formData, [stepName]: data })
  }

  const updateStepValidity = (isValid: boolean) => {
    setIsStepValid(isValid)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo updateFormData={updateFormData} updateStepValidity={updateStepValidity} />
      case 1:
        return <Education updateFormData={updateFormData} updateStepValidity={updateStepValidity} />
      case 2:
        return <WorkExperience updateFormData={updateFormData} updateStepValidity={updateStepValidity} />
      case 3:
        return <SkillsPreferences updateFormData={updateFormData} updateStepValidity={updateStepValidity} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">Register for Career Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div key={step} className="text-sm font-medium text-gray-500">
                  <span className={`mr-2 ${index <= currentStep ? 'text-blue-600' : ''}`}>●</span>
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <form onSubmit={formAction}>
            {renderStep()}
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                onClick={handlePrevious} 
                disabled={currentStep === 0}
                variant="outline"
              >
                Previous
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext} disabled={!isStepValid}>Next</Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
          {state.message && (
            <div className={`mt-4 p-2 ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded`}>
              {state.message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}


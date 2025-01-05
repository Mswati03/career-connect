{/*
    'use server'

import { revalidatePath } from 'next/cache'

// This is a placeholder for your database connection
// You would replace this with your actual database setup
import db from 'db'

export async function registerUser(formData: FormData) {
  // Extract data from FormData
  const personalInfo = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  }

  const education = {
    institution: formData.get('institution'),
    degree: formData.get('degree'),
    graduationYear: formData.get('graduationYear'),
  }

  const workExperience = {
    company: formData.get('company'),
    jobTitle: formData.get('jobTitle'),
    duration: formData.get('duration'),
    responsibilities: formData.get('responsibilities'),
  }

  const skillsPreferences = {
    skills: formData.get('skills'),
    desiredPosition: formData.get('desiredPosition'),
    expectedSalary: formData.get('expectedSalary'),
    remoteWork: formData.get('remoteWork') === 'on',
    relocation: formData.get('relocation') === 'on',
  }

  // Handle file upload
  const resumeFile = formData.get('resume') as File
  let resumeUrl = ''

  if (resumeFile) {
    // This is a placeholder for file upload logic
    // You would implement your own file upload mechanism here
    resumeUrl = await uploadFile(resumeFile)
  }

  // Combine all data
  const userData = {
    ...personalInfo,
    ...education,
    ...workExperience,
    ...skillsPreferences,
    resumeUrl,
  }

  try {
    // Save to database
    await db.user.create(userData)

    // Revalidate the page to show updated data
    revalidatePath('/register')

    return { success: true, message: 'User registered successfully!' }
  } catch (error) {
    console.error('Error registering user:', error)
    return { success: false, message: 'Failed to register user. Please try again.' }
  }
}

// Placeholder function for file upload
async function uploadFile(file: File): Promise<string> {
  // Implement your file upload logic here
  // This could involve uploading to a cloud storage service like AWS S3
  // For now, we'll just return a placeholder URL
  return 'https://example.com/uploads/' + file.name
}

*/}
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../services/api';
import "../../index.css"

const applicationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  amount: z.number().min(100, 'Minimum amount is $100'),
  purpose: z.string().min(1, 'Purpose is required'),
  employmentStatus: z.string().min(1, 'Employment status is required'),
});

type FormData = z.infer<typeof applicationSchema>;

const ApplicationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(applicationSchema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await api.submitApplication(data);
      // Handle success
    } catch (error) {
      console.error('Submission error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="application-form">
      {/* Form fields */}
      <div className="form-group">
        <label>Full Name</label>
        <input {...register('fullName')} />
        {errors.fullName && <span className="error">{errors.fullName.message}</span>}
      </div>
      
      {/* Other form fields */}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default ApplicationForm;
import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from '@ui'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    pattern,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="grid md:grid-cols-2 grid-rows-4 gap-x-[30px] gap-y-[16px] mb-10">
        <Input
          placeholder="First name"
          attributes={register('firstName', { required: true })}
          className={`${errors.firstName ? 'border-[red]' : ''}`}
        />
        <Input
          placeholder="Last name"
          attributes={register('lastName', { required: true })}
          className={`${errors.lastName ? 'border-[red]' : ''}`}
        />
        <Input
          placeholder="Email address"
          attributes={register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className={`${errors.email ? 'border-[red]' : ''}`}
        />
        <Input
          type="number"
          placeholder="Phone number"
          attributes={register('phone', { required: true })}
          className={`${errors.phone ? 'border-[red]' : ''}`}
        />
        <Input
          type="textarea"
          placeholder="Description"
          attributes={register('description', { maxLength: 20 })}
          className={`${
            errors.description ? 'border-[red]' : ''
          } md:col-span-2 row-span-2`}
        />
      </label>
      <Button type="submit">Get a quote</Button>
    </form>
  )
}

export default ContactForm

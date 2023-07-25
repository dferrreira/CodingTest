import React, { useState } from "react";
import cx from 'classnames';
import { useForm } from "react-hook-form"
import {
  Form,
  FormGroup,
  FormInput,
  FormTextarea
} from "../../Components/Form";
import * as S from './styled';

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("@>>Data", data);
    setSuccess(true);
    const messageTimeout = setTimeout(() => { 
      setSuccess(false)
      clearTimeout(messageTimeout)
    }, 3000);
  }
  
  return (
    <S.ContactFormWrapper>
    <S.ContactFormTitle>
      Contact Us
    </S.ContactFormTitle>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormInput
          ref={register({ required: 'Required Field' })}
          errors={errors}
          id="firstName"
          name="firstName"
          placeholder="First Name"
          label="First Name"
          type="text"  
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          ref={register({ required: 'Required Field' })}
          errors={errors}
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          label="Last Name"
          type="text"  
        />
      </FormGroup>
      <FormGroup>
        <FormInput
          ref={register({
            required: 'Required Field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email format is invalid',
          }})}
          errors={errors}
          id="email"
          name="email"
          placeholder="Email"
          label="Email"
          type="text"  
        />
        </FormGroup>
        <FormGroup>
        <FormInput
          ref={register({ required: 'Required Field' })}
          errors={errors}
          mask="+99 (99) 99999-9999"
          id="phone"
          name="phone"
          placeholder="Phone"
          label="Phone"
          type="text"  
        />
      </FormGroup>
      <FormGroup>
        <FormTextarea 
           ref={register({ required: 'Required Field' })}
          errors={errors}
          id="message"
          name="message"
          placeholder="Your message here..."
          label="Message"
          />
      </FormGroup>
      <S.ContactFormSuccess className={cx({ 'is--visible': isSuccess })}>
        Thank you, your contact request was senty successfully!
      </S.ContactFormSuccess>
      <FormGroup>
        <S.ContactFormSubmit
          color="primary"
          id="submitButton"
          primary
          title="Send"
          type="submit"
        >
          Send
        </S.ContactFormSubmit>
      </FormGroup>
    </Form>
    </S.ContactFormWrapper>
  )
};

export default ContactForm;
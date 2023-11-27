
import 'bootstrap/scss/bootstrap.scss';
import React, { useState, useEffect } from 'react';
import "../scss/form-validation.scss"

const FormComponent = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: '',
    passwordError: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0][0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.firstName) {
      errors.firstNameError = 'Lütfen ismi doldurun.';
    }
    if (!formData.lastName) {
      errors.lastNameError = 'Lütfen soyismi doldurun.';
    }
    if (!formData.email) {
      errors.emailError = 'Lütfen e-posta adresini doldurun.';
    } else if (!isValidEmail(formData.email)) {
      errors.emailError = 'Geçerli bir e-posta adresi girin.';
    }
    if (!formData.phone) {
      errors.phoneError = 'Lütfen telefon numarasını doldurun.';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phoneError = 'Geçerli bir Türkiye telefon numarası girin.';
    }
    if (!formData.password) {
      errors.passwordError = 'Lütfen parolayı doldurun.';
    } else if (!isValidPassword(formData.password)) {
      errors.passwordError = 'Parolanız en az 8 karakter uzunluğunda olmalıdır.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const uniqueId = '_' + Math.random().toString(36).substr(2, 9);
    setFormData({ ...formData, id: uniqueId });
    onFormSubmit({ ...formData, id: uniqueId });
    localStorage.setItem('formData', JSON.stringify({ ...formData, id: uniqueId }));
    setFormData({ id: '', firstName: '', lastName: '', email: '', phone: '', password: '' });
    setFormErrors({
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      phoneError: '',
      passwordError: '',
    });

    setShowSuccessModal(true); // Show success modal
  };

  return (
    <div className='form-component'>
			<h2 className='form-component-header'>Account List</h2>
      <form onSubmit={handleSubmit}>
        <div className=" mb-3">
          <input
            type="text"
            name="firstName"
            placeholder="İsim"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small className="text-danger">{formErrors.firstNameError}</small>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            placeholder="Soyisim"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small className="text-danger">{formErrors.lastNameError}</small>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small className="text-danger">{formErrors.emailError}</small>
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small className="text-danger">{formErrors.phoneError}</small>
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Parola"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small className="text-danger">{formErrors.passwordError}</small>
        </div>
        <button type="submit" className="btn btn-primary">Add list</button>
      </form>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showSuccessModal ? 'show' : ''}`} style={{ display: showSuccessModal ? 'block' : 'none' }} tabIndex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Başarı!</h5>
              <button type="button" className="btn-close" onClick={() => setShowSuccessModal(false)}></button>
            </div>
            <div className="modal-body">
              Form başarıyla gönderildi!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => setShowSuccessModal(false)}>Kapat</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showSuccessModal ? 'show' : ''}`} style={{ display: showSuccessModal ? 'block' : 'none' }}></div>
    </div>
  );
};

export default FormComponent;


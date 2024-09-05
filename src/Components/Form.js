import React, { useState } from 'react';
import '../Stylesheets/Form.css';
import EndUser from './EndUser';
import REInput from './REInput';


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        role: 'generic',
        subCat: '',
        mailAddress: '',
        interestAddress: '',
        budget: '',
        bedrooms: '',
        Bathrooms: '',
        location: '',
        wantsNeeds: '',
        propertyType: '',
        offer: '',
        dueDiligence: '',
        daysForClosing: '',
        titleCompany: '',
        escrowAmount: '',
        paymentType: '',
        financeOption: '',
        futureUse: '',
        commission: '',
        sellerA: '',
        sellerB: '',
        time: '',
        term: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (name === 'role' && value !== 'buyer') {
            setFormData(prevState => ({
                ...prevState,
                role: value,
                subCat: '' // Reset subCat to null when role is not 'buyer'
            }));
        } else if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked
            }));
        } else if (type === 'select-multiple') {
            const options = event.target.options;
            const selectedOptions = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedOptions.push(options[i].value);
                }
            }
            setFormData(prevState => ({
                ...prevState,
                [name]: selectedOptions
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form Data:', formData);
    //     // Add logic to process or validate form data
    // };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Select Role</label>
                <select className="form-control" id="role" name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="contact">Contact</option>
                    <option value="re">Real Estate</option>
                </select>
            </div>

            {formData.role === 'contact' && (
                <div>
                    <h3>Customer Specific Information</h3>
                    <EndUser />
                </div>
            )}


            {formData.role === 're' && (
               <div>
                    <h3>Real Estate Input</h3>
                    <REInput />
                </div>
            )}
        </div>
    );
}

export default Form;

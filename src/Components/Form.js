import React, { useState } from 'react';
import '../Stylesheets/Form.css';


function Form() {
    const [role, setRole] = useState('');

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            {/* <div className="mb-3">
                <label htmlFor="business" className="form-label">Business</label>
                <input type="text" className="form-control" id="business" />
            </div> */}
            
            <div className="mb-3">
                <label className="form-label">Role</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="investor" value="investor" onChange={() => setRole('investor')} />
                    <label className="form-check-label" htmlFor="investor">Investor</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="seller" value="seller" onChange={() => setRole('seller')} />
                    <label className="form-check-label" htmlFor="seller">Seller</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="buyer" value="buyer" onChange={() => setRole('buyer')} />
                    <label className="form-check-label" htmlFor="buyer">Buyer</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="offer" value="offer" onChange={() => setRole('offer')} />
                    <label className="form-check-label" htmlFor="offer">Offer</label>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Property Type</label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="role" id="commercial" value="commercial"  />
                    <label className="form-check-label" htmlFor="commercial">Commercial</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="role" id="residential" value="residential" />
                    <label className="form-check-label" htmlFor="residential">Residential</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="role" id="land" value="land"/>
                    <label className="form-check-label" htmlFor="land">Land</label>
                </div>
            </div>
            {role === 'buyer' && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="buyerName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="buyerName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerBudget" className="form-label">Budget</label>
                        <input type="text" className="form-control" id="buyerBudget" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerBedrooms" className="form-label">Bedrooms</label>
                        <input type="number" className="form-control" id="buyerBedrooms" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerBathrooms" className="form-label">Bathrooms</label>
                        <input type="number" className="form-control" id="buyerBathrooms" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerLocation" className="form-label">Location</label>
                        <input type="text" className="form-control" id="buyerLocation" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerWantsNeeds" className="form-label">Wants / Needs</label>
                        <input type="text" className="form-control" id="buyerWantsNeeds" />
                    </div>
                </div>
                
            )}
            {role === 'investor' && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="investorPropertyType" className="form-label">Property Type Sought</label>
                        <input type="text" className="form-control" id="investorPropertyType" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="investorFutureUse" className="form-label">Future Use</label>
                        <input type="text" className="form-control" id="investorFutureUse" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="investorBudget" className="form-label">Budget</label>
                        <input type="text" className="form-control" id="investorBudget" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="investorLocation" className="form-label">Location</label>
                        <input type="text" className="form-control" id="investorLocation" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="investorWantsNeeds" className="form-label">Wants / Needs</label>
                        <input type="text" className="form-control" id="investorWantsNeeds" />
                    </div>
                </div>
            )}
            {role === 'seller' && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="sellerBudget" className="form-label">Sale Price</label>
                        <input type="text" className="form-control" id="sellerBudget" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sellerCommission" className="form-label">Commission</label>
                        <input type="number" className="form-control" id="sellerCommission" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sellAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="sellAddress" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sellerA" className="form-label">Seller A Email</label>
                        <input type="text" className="form-control" id="sellerA" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sellerB" className="form-label">Seller B Email</label>
                        <input type="text" className="form-control" id="sellerB" />
                    </div>
                </div>
            )}
            {role === 'offer' && (
                <div>
                    <div className="mb-3">
                        <label htmlFor="buyerName" className="form-label">Name Property Will Be Titled In</label>
                        <input type="text" className="form-control" id="buyerName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerOffer" className="form-label">Offer Amount</label>
                        <input type="text" className="form-control" id="buyerOffer" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerDueDilligence" className="form-label">Due Dilligence Period</label>
                        <input type="text" className="form-control" id="buyerDueDilligence" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerDaysForClosing" className="form-label">Days For Closing</label>
                        <input type="text" className="form-control" id="buyerDaysForClosing" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerTitleCompany" className="form-label">Title Company</label>
                        <input type="text" className="form-control" id="buyerTitleCompany" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerEscrowAmount" className="form-label">Escrow Amount</label>
                        <input type="text" className="form-control" id="buyerEscrowAmount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="buyerPaymentType" className="form-label">Payment Type</label>
                        <input type="text" className="form-control" id="buyerPaymentType" />
                    </div>
                </div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;

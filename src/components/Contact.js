import React from 'react'

export default function Contact() {
    return (
        <>
            <section class="promo-section  pt-5  pb-5  gray-light-bg" id="form">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 col-md-8">
                            <div class="section-heading text-center mb-5">
                                <h2>Company Registration Form </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row equal">
                        <div class="col-md-2 col-lg-2 "></div>
                        <div class="col-md-8 col-lg-8 mb-3 ">
                            <form action="#" method="POST" id="contactForm" class="contact-us-form">

                                <div class="row">
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <select name="entity" class="form-control">
                                                <option value="">Type of Entity</option>
                                                <option value="OPC">OPC</option>
                                                <option value="LLP">LLP</option>
                                                <option value="Private Limited Company">Private Limited Company</option>
                                                <option value="Public Limited Company">Public Limited Company</option>
                                            </select> </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="company_name" id="email" placeholder="Name of Company" required="required" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea name="activity" id="message" class="form-control" rows="7" cols="25" placeholder="Describe Business Activity"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" name="c_address" value="" class="form-control" id="phone" placeholder="Company Registered Address" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <select name="state" id="state" class="form-control">
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                <option value="Daman and Diu">Daman and Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" name="share_cap" value="" class="form-control" id="phone" placeholder="Share Capital (INR)" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" name="name_dir" value="" class="form-control" id="phone" placeholder="Number of Directors" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <label><strong>Directors Detail</strong></label>
                                        <div class="form-group">
                                            <div class="form-group" id="dynamic_form">
                                                <div class="row">
                                                    <div class="col-md-5">
                                                        <input type="text" name="p_name" id="p_name" placeholder="Name of Director " class="form-control" />
                                                    </div>
                                                    <div class="col-md-5">
                                                        <input type="text" class="form-control" name="quantity" id="quantity" placeholder="Shareholding %" />
                                                    </div>
                                                    <div class="button-group mt-3">
                                                        <a href="javascript:void(0)" class="btn btn-primary" id="plus5"><span class="ti-plus text-white"></span></a>
                                                        <a href="javascript:void(0)" class="btn btn-danger" id="minus5"><span class="ti-minus text-white"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" required="" name="phone" value="" class="form-control" id="phone" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            <input type="text" required="" name="email_id" value="" class="form-control" id="phone" placeholder="Email id" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-12">
                                        <div class="form-group">
                                            I hereby declare that information provided in the online registration form is true to the best of my knowledge and I accept notes, terms, disclaimer, and policies by clicking "Submit Form" button.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 mt-3 text-center">
                                        <button type="submit" name="submit_registraton" class="btn solid-btn disabled" id="btnContactUs">
                                            <img src="img/ajax-loader.gif" width="15" id="loader_form" /> SUBMIT FORM
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

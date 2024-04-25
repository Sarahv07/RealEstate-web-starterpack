import React from 'react';
import './Form.css'; // Import the external CSS file

const Form = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex-container'>
                <div className='form-container'>
                    <h1 className='text-2xl font-bold mb-4'>Lens Ready? Let's Book Your Shoot Now!</h1><br/>
                    <form className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <input className='input-field' type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input className='input-field' type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div>
                            <input className='input-field' type="text" placeholder="Phone Number" />
                        </div>
                        <div>
                            <input className='input-field' type="text" placeholder="Photography Style" />
                        </div>
                        <div>
                            <textarea className='input-field' cols={30} rows={6} placeholder="Message"></textarea>
                        </div>
                        <button className='submit-button'>Submit</button>
                    </form>
                </div>
                <div className='image-container2'>
                    <img src='./form.jpeg' alt='Background' className='image' />
                </div>
            </div>
        </div>
    );
}

export default Form;

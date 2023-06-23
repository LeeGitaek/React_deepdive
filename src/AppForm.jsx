import React, { useState } from "react";

export default function AppForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [form, setForm] = useState({name: '', email: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        //ex) {name: 'gitaeklee', email: 'gitaeklee96@gmail.com'}
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>name: </label>
            <input type='text' id='name' name='name' value={form.name} 
                onChange={handleChange}
            />
            <label htmlFor='email'>email :</label>
            <input type='email' id='email' name='email' value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}
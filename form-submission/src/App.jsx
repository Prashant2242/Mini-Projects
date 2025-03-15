
import { useState } from 'react';
import './App.css'

function App() {

  const [data, setData]=useState({
    FirstName:'',
    LastName:'',
    Email:'',
    Contact:'',
    Gender:'',
    Subject:'',
    about:'',
    resume:'',
    imgurl:''
  })

  const handleChange=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
  }

  const  handleReset=(e)=>{
    setData({
      FirstName:'',
      LastName:'',
      Email:'',
      Contact:'',
      Gender:'',
      Subject:'',
      about:'',
      resume:'',
      imgurl:''
    })
  }

  return (
<div class="container">
  <h1>Form Validation</h1>
  <form onSubmit={handleSubmit}>
    <label for="FirstName">First Name</label>
    <input type="text" id="FirstName" placeholder="Write your First Name" name="FirstName" required onChange={handleChange} value={data.FirstName}/>

    <label for="LastName">Last Name</label>
    <input type="text" id="LastName" placeholder="Write your Last Name" name="LastName" required onChange={handleChange} value={data.LastName}/>

    <label for="Email">Email</label>
    <input type="email" id="Email" placeholder="Write your Email" required name="Email" onChange={handleChange} value={data.Email}/>

    <label for="Contact">Contact</label>
    <input type="number" id="Contact" placeholder="Write your Contact" name="Contact" required onChange={handleChange} value={data.Contact}/>

    <label htmlFor='gender'>Gender</label>
      <input type="radio" id="male" name="Gender" onChange={handleChange} value={data.male}/>Male
      <input type="radio" id="female" name="Gender"  onChange={handleChange} value={data.female}/>Female
      <input type="radio" id="other" name="Gender"  onChange={handleChange} value={data.other}/>Other

    <label for="Subject">Your best Languages:</label>
    <select name="Subject" id="Subject" onChange={handleChange} required value={data.Subject}>
    <option value="">Select a Language</option>
      <option value="C++">C++</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Python">Python</option>
    </select>

    <label for="resume" >Resume</label>
    <input type="file" id="resume" name="resume" onChange={handleChange} value={data.resume}/>

    <label for="imgurl">URL</label>
    <input type="url" id="imgurl" placeholder="Enter Image URL" name="imgurl" onChange={handleChange} value={data.imgurl}/>

    <label for="about">About</label>
    <textarea name="about" id="about" cols="30" rows="10" placeholder="Enter your text here" onChange={handleChange} value={data.about} ></textarea >

    <button type="reset" onClick={handleReset}>Reset</button>
    <button type="submit" >Submit</button>
  </form>
</div>

  
  )
}

export default App;

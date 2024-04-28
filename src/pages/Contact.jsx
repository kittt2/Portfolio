import React, { useEffect, useMemo } from 'react'
import { ImLinkedin } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [text, settext] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [comment,setcomment]=useState([])
  const [commentUpdated, setCommentUpdated] = useState(false);
  async function submit(e) {
    e.preventDefault();
    try {
      toast.success("Submitting...");
      const send = await axios.post(`${apiUrl}/api/v1/response/form`, {
        name,
        email,
        text
      });
      localStorage.setItem('send', JSON.stringify(send.data));
      toast.success("Submitted successfully!");
      setCommentUpdated(true);
     
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    }

    setname("");
    setemail("");
    settext("");
    console.log(comment)
  }
 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('send'));
    if (data && data.user) {
      setcomment(data.user);
      console.log(comment);
    }
    setCommentUpdated(false);
  }, [commentUpdated]); 

  return (
    <div id='test2'>
      <div id='contacth3'>
        <motion.h3 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.4,delay:0.3}} >GET In Touch</motion.h3>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.4,delay:0.3}} >Contact Me</motion.h2>
        <div id='contact'>
          <div>
            <motion.div id='contact-box' whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.4,delay:0.3}} >
              <div >
                <SiMinutemailer id='contactboxicon'></SiMinutemailer>
                <span id='contactspan'>nitinformal3@gmail.com</span>
              </div>
              <div >
                <ImLinkedin id='contactboxicon'></ImLinkedin>
                <a id='contact-a' href="https://www.linkedin.com/in/nitin-saini-7451b02b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEcVtkEBuR7qHTWreb4rhOw%3D%3D"> LinkedIN</a>
              </div>
            </motion.div>
            <motion.button id='response' onClick={() => setIsOpen(true)} whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.4,delay:0.3}}>Your Response</motion.button>

              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              { comment.text}
              </Modal>
          </div>
          <div id='contactf'>
            <motion.form onSubmit={submit} id='form' whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0.5}} transition={{duration:0.4,delay:0.3}}>
              <input type="text" placeholder='name' onChange={(e) => setname(e.target.value)} value={name} />
              <input type="text" placeholder='email' onChange={(e) => setemail(e.target.value)} value={email} />
              <input type="text" placeholder='your query' onChange={(e) => settext(e.target.value)} value={text} />
              <button type='submit'>Submit</button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact

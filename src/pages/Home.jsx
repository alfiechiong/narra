import Layout from '@/components/Layout';
import  Button  from '@/components/Button';
import React from 'react';


function Home() {
  return (
    <Layout>
    <div>
      <h1>
        Hello World!</h1>
        <p>Sample Radix button</p>
          <Button type="primary" color= "red" radius="small" onClick={()=>alert("hello world")}>new button</Button>
          
         
        </div>
    </Layout>
  );
}

export default Home
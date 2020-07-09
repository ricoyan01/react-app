import React from 'react';
import './style.css';

function Hubungi(props) {
    return(
        <h2 class="m-heading">{props="Hubungi Kami Sekarang Juga"}</h2>
    );
}

export default class Kontak extends React.Component{
    constructor(props) {
        super(props);

        this.inputName=React.createRef()
        this.inputEmail=React.createRef()
        this.inputHP=React.createRef()
        this.inputSaran=React.createRef()
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(event) {
        alert(`
        Nama : ${this.inputName.current.value},
        Email : ${this.inputEmail.current.value},
        No. Hp : ${this.inputHP.current.value},
        Saran : ${this.inputSaran.current.value}
        `)
        event.preventDefault();
        event.stopPropagation();
    }
    

    render(){
    return(
<section id="contact">
    <div class="contact-form">
    <Hubungi></Hubungi>
      <p>Isi Formulir Dibawah</p>
      <form onSubmit={this.onSubmit}>
        <div class="form-group">
          <label>Nama: </label>
          <input type="text" name="nama" ref={this.inputName} placeholder="Masukkan Nama" /><br/>
          <label>Email: </label>
          <input type="email" name="email" ref={this.inputEmail} placeholder="Masukkan email" /><br/>
          <label>Nomor Handphone: </label>
          <input type="Number" name="hp" ref={this.inputHP} placeholder="Masukkan No.Handphone" /><br/>
          <label>Pesan: </label>
          <input type="text" name="pesan" ref={this.inputSaran} placeholder="Masukkan Pesan" /><br/>
          <p></p>
        </div>
        <button type='submit' class="btn-dark" >Kirim</button>
      </form>
    </div>
    </section>
    );
    }
 }

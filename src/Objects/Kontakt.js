import React, { Component } from "react";
 
class Kontakt extends Component {
  render() {
    return (
      <div>
        <div className="Contact-Title">Kontaktni podatki:</div>
        <div>
          <div>
            <p className="Name">Tomo R.</p>
            <p className="Number">031/811-633</p>
          </div>
          <div>
            <p className="Name">Slavko R.</p>
            <p className="Number">041/809-070</p>
          </div>
          <div>
            <p className="Name">Mail</p>
            <p className="Number Mail">tomo.ravnjak.s.p@gmail.com</p>
          </div>
        </div>
        <div className="Contact-Title">Naslov:</div>
        <div>
          <p className="Contact">Tomo Ravnjak s.p</p>
          <p className="Contact">Brezje pri Oplotnici 32</p>
          <p className="Contact">2317 Oplotnica</p>
        </div>
        <div>
          <iframe className="Map" title="GMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.0783695052564!2d15.429049415588636!3d46.38767067912273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47657e3b069deaeb%3A0x2a4be331e21e9d44!2sBrezje+pri+Oplotnici+32%2C+2317+Oplotnica%2C+Slovenia!5e0!3m2!1sen!2sat!4v1553124846786" ></iframe>
        </div>
      </div>
    );
  }
}
 
export default Kontakt;
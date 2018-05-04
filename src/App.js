import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: JSON.parse(localStorage.getItem('localData')),
    };
  }

  addTodo = event => {
    // Ambil nilai dari inputan
    let inputValue = this.input.value;

    //cek apakah localStorage kosong jika TRUE
    if (localStorage.getItem('localData') === null) {
      //inisialisasi let item untuk store data
      let item = [];

      //push data ke item
      item.push(inputValue);

      //set localStorage 'localData' gunakan JSON.stringify
      //untuk merubah ke format yang dapat di gunakan localStorage
      localStorage.setItem('localData', JSON.stringify(item));
    } else {
      //jika localStorage ada data nya dan bernilai FALSE
      //inisialisasi let item dengan data dari localStorage
      //gunakan JSON.parse untuk parsing data
      let item = JSON.parse(localStorage.getItem('localData'));

      //value dari inputan di push ke variabel item
      item.push(inputValue);

      //simpan hasil item ke dalam localStorage
      localStorage.setItem('localData', JSON.stringify(item));
    }

    //ubah state items dengan isi dari localStorage
    this.setState({
      items: JSON.parse(localStorage.getItem('localData')),
    });

    //Reset inputan menjadi kosong setelah tekan tombol add
    this.input.value = '';
    //fokuskan inputan ke input
    this.input.focus();
  };

  onRemove = id => {
    //ambil id dari array yang kita pilih
    /*console.log("Id data =", id);*/

    //filter data, males jelasin hahah mohon lihat dokumentasi javascript .filter method
    let updatedTodo = this.state.items.filter((todo, index) => {
      return (
        //jika id yang di tekan tidak sama dengan index maka true
        id !== index
      );
    });
    //hasil dari updatedTodo adalah data yang sudah di kurangi setelah tekan tombol remove
    // gunakan console.log(updatedTodo) untuk lebih jelas

    //set localStorage
    localStorage.setItem('localData', JSON.stringify(updatedTodo));

    //set state
    this.setState({
      items: updatedTodo,
    });
  };

  render() {
    return (
      <div className="container text-center ">
        <h1 className="mt-5">My Todo Lists</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <ListGroup>
              {this.state.items &&
                this.state.items.map((item, index) => {
                  return (
                    <ListGroupItem key={index}>
                      <div className="d-flex">
                        <div className="p-2">{item}</div>
                        <div className="ml-auto p-2">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.onRemove(index)}>
                            X
                          </button>
                        </div>
                      </div>
                    </ListGroupItem>
                  );
                })}
            </ListGroup>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <div className="d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="insert todo list"
                ref={el => (this.input = el)}
              />
              <button
                className="btn btn-outline-primary"
                onClick={this.addTodo}>
                Add Todo List
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

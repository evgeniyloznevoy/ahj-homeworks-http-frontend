export default class Gui {
    constructor() {
      this.status = document.querySelector('[data-id=status]');
      this.title = document.querySelector('[data-id=title]');
      this.data = document.querySelector('[data-id=data]');
      this.list = document.querySelector('.list');
      this.modal = document.querySelector('.modal');
      this.widget = document.querySelector('.ticketswidget');
    }
  
    rowTemplate(id, status, title, data) {
      return `
      <div class='row' data-id=${id}>
        <div data-id='status'>${status}</div>
        <div class='title' data-id='title'>${title}</div>
        <div class='data' data-id='data'>${data}</div>
        <div><button data-id='edit'>✎</button></div>
        <div><button data-id='del'>✖</button></div>
      </div>
      `;
    }
  
    editTemplate(header, title, description, name, id) {
      return `
      <form name=${name} data-idfor="${id}">
        <h3>${header}</h3>
        Краткое описание <input type="text" name='title' value="${title}"><br>
        Подробное описание <input type="text" name='description' value="${description}"><br>
        <button type="reset">Отмена</button>
        <button type="submit">Ок</button> 
      </form>
      `;
    }
  
    descriptionTemplate(description) {
      return `
      <p>${description}</p>
      `;
    }
  
    delTemplate(id) {
      return `
      <form name='del' data-idfor="${id}">
        <h3>Удалить тикет</h3>
        <p>Вы уверены, что хотите удалить тикет? Это действие необратимо</p>
        <button type="reset">Отмена</button>
        <button type="submit">ОК</button>
      </form>
      `;
    }
  }

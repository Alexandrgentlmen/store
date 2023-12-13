import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  // addItem() {
  //   this.setState({
  //     ...this.state,
  //     list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }]
  //   })
  // };

  /**
 * Добавление товара
 */
  addToCart(item) {
    const searchItem = item.code;
    const copyCart = [...this.state.cart];
    const itemCode = copyCart.find(i => i.code === searchItem);

    let freshCart = [];
    if (itemCode) {

      freshCart = this.state.cart.map(i => {

        if (i.code === itemCode.code) {
          console.log('i.counts - Before', i.counts);
          i.counts = itemCode.counts + 1;
          console.log('i.counts - After', i.counts);
        }
        return i
      });
    } else {
      freshCart = [...this.state.cart, { ...item, counts: 1 }];
    }

    console.log('freshCart ошибка', freshCart);

    this.setState({
      ...this.state,
      cart: freshCart,
      condition: {
        ...this.state.condition,
        valueItems: this.state.cart.length,
        summ: this.state.cart.reduce((acc, element) => {
          return acc + (element.price * element.counts)
        }, 0),
      },
    })
  };

  /**
  * Открытие закрытие корзины
  */
  onCloseCart() {
    this.setState({
      ...this.state,
      condition: { ...this.state.condition, cartOpen: false }
    })
  };

  onEnterCart() {
    this.setState({
      ...this.state,
      condition: { ...this.state.condition, cartOpen: true }
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(item => item.code !== code),
      condition: {
        ...this.state.condition,
        valueItems: this.state.cart.length,
        summ: this.state.cart.reduce((acc, element) => {

          return acc + (element.price * element.counts)
        }, 0),
      },
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  // selectItem(code) {
  //   this.setState({
  //     ...this.state,
  //     list: this.state.list.map(item => {
  //       if (item.code === code) {
  //         // Смена выделения и подсчёт
  //         return {
  //           ...item,
  //           selected: !item.selected,
  //           count: item.selected ? item.count : item.count + 1 || 1,
  //         };
  //       }
  //       // Сброс выделения если выделена
  //       return item.selected ? { ...item, selected: false } : item;
  //     })
  //   })
  // }
}

export default Store;

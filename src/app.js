import React, { useCallback } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import Modal from "./components/modal";
import PageLayout from "./components/page-layout";
import Information from './components/information';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const cartList = store.getState().cart;
  const cartSumm = store.getState().condition.summ;
  const cartItems = store.getState().condition.valueItems;
  const modalActive = store.getState().condition.cartOpen;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addToCart(item);
    }, [store]),

    onCloseCart: useCallback(() => {
      store.onCloseCart();
    }, [store]),

    onEnterCart: useCallback(() => {
      store.onEnterCart();
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Information
        title='В корзине'
        condition='head-store'
        onEnterCart={callbacks.onEnterCart}
        cartItems={cartItems}
        summ={cartSumm} />
      <List
        list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onAddItem={callbacks.onAddItem}
        condition='store' />
      <Modal
        onCloseCart={callbacks.onCloseCart}
        modalActive={modalActive}
        cart={cartList}
        onDeleteItem={callbacks.onDeleteItem} />
    </PageLayout>
  );
}

export default App;

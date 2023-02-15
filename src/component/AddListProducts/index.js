import React, {useState } from 'react';
import * as Button from '../Button/style';
import * as S from './style';
import * as L from '../ListItems/style';
import * as I from '../Items/style';
import { FaTrash } from 'react-icons/fa';
import products from '../../products.json';
export const AddListProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [priority, setPriority] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({ name: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchProduct, setSearchProduct] = useState('');
  /**This method is called when the user select a product from a list of products */
  const handleProductSelect = (event) => {
    const selectedName = event.target.value;
    const foudedProduct = products.find(
      (product) => product.name === selectedName
    )

    if (
      typeof foudedProduct !== 'undefined' &&
      isNaN(foudedProduct) !== true &&
      foudedProduct !== null
    ) {
      setSelectedProduct(selectedProduct)
    } else {
      setSelectedProduct({ name: selectedName })
    }
  }

  /**The handleSearchChange method is called whenever the user types something into the search box */
  const handleSearchChange = (event) => {
    setSearchProduct(event.target.value)
  }

/**This method is called when the user clicks the search button or presses the Enter key in the search box. */
  const handleSearch = (event) => {
    event.preventDefault()
    setShoppingList(
      shoppingList.filter((item) => item.name.includes(searchProduct))
    )
  }

  /**This method sorts the list according to priority. */
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value)
    setShoppingList(
      shoppingList.sort((a, b) => {
        if (sortOrder === 'asc') {
          if (a.priority === 'Alta' && b.priority !== 'Alta') return -1
          if (a.priority !== 'Alta' && b.priority === 'Alta') return 1
          if (a.priority === 'Média' && b.priority === 'Baixa') return -1
          if (a.priority === 'Baixa' && b.priority === 'Média') return 1
        } else {
          if (a.priority === 'Baixa' && b.priority !== 'Baixa') return -1
          if (a.priority !== 'Baixa' && b.priority === 'Baixa') return 1
          if (a.priority === 'Média' && b.priority === 'Alta') return -1
          if (a.priority === 'Alta' && b.priority === 'Média') return 1
        }
        return 0
      })
    )
  }

  /**This method is called when the user change a quantity of the product that want to add to the shopping List  */
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }

  /**this method is called when the user changes a priority of the product that wants to add to the shopping List */
  const handlePriorityChangeInList = (index, event) => {
    const newShoppingList = [...shoppingList];
    newShoppingList[index].priority = event.target.value;
    setShoppingList(
      newShoppingList.sort((a, b) => {
        if (a.priority === 'Alta' && b.priority !== 'Alta') return -1;
        if (a.priority !== 'Alta' && b.priority === 'Alta') return 1;
        if (a.priority === 'Média' && b.priority === 'Baixa') return -1;
        if (a.priority === 'Baixa' && b.priority === 'Média') return 1;
        return 0;
      })
    );
  };

  /**This method is responsible for adding a product to the shopping list. */
  const addProduct = () => {
    if (!selectedProduct.name || !quantity) {
      alert('Informe o produto e a quantidade');
      return;
    } else if (quantity < 1) {
      alert('Informe um valor positivo');
    } else {
      const checkDuplicity = shoppingList.find(
        (product) => product.name === selectedProduct.name
      );
      if (typeof checkDuplicity === 'undefined') {
        const newShoppingList = [...shoppingList];
        newShoppingList.unshift({
          ...selectedProduct,
          quantity,
          priority,
        });
        setShoppingList(newShoppingList);
        setSelectedProduct({ name: '' });
        setQuantity(1);
        setPriority('');
      } else {
        alert('Duplicado');
      }
    }
  };

  /**This method is called when the user clicks a shopping list item delete button */
  const deleteProduct = (index) => {
    const newShoppingList = [...shoppingList];
    newShoppingList.splice(index, 1); //The number 1 indicates that only one item should be removed.
    setShoppingList(newShoppingList);
  };

  return (
    <>
      <S.Container>
        <S.InputContent>
          <S.HeaderList>Produto:</S.HeaderList>
          <S.Input
            type="text"
            name="name"
            id="name"
            value={selectedProduct.name}
            placeholder="Seleciona um produto"
            onChange={handleProductSelect}
            required
            list="products"
          />
          <datalist id="products">
            {products.map((product) => (
              <option value={product.name} key={product.name}>
                {product.name}
              </option>
            ))}
          </datalist>
        </S.InputContent>
        <S.InputContent>
          <S.HeaderList>Quantidade:</S.HeaderList>
          <S.Input
            type="number"
            value={quantity}
            placeholder="1"
            onChange={handleQuantityChange}
          />
        </S.InputContent>

        <Button.Btn onClick={addProduct}>Adicionar</Button.Btn>
      </S.Container>
      <S.ContainerListEmpty>
        {shoppingList.length === 0 && <span>Lista Vazia</span>}
      </S.ContainerListEmpty>

      {shoppingList.length > 0 && (
        <L.Container>
          <L.filterContainer>
            {' '}
            <S.SelectPriority
              width={40}
              onChange={(event) => handleSortOrderChange(event)}
            >
              <option value="asc">Ordenação Cresc (Baixa, Média, Alta)</option>
              <option value="desc">
                Ordenação Decres (Alta, Média, Baixa)
              </option>
            </S.SelectPriority>
            <L.Search>
              <S.Input
                type="text"
                value={searchProduct}
                placeholder="pesquisar..."
                onChange={handleSearchChange}
              />

              <Button.BtnSearch type="submit" onClick={handleSearch}>
                Pesquisar
              </Button.BtnSearch>
            </L.Search>
          </L.filterContainer>
          <L.ContainerTable>
            <L.Table>
              <L.Thead>
                <L.Tr>
                  <L.Th width={30}>Produtos</L.Th>
                  <L.Th width={30}>Quantidade</L.Th>
                  <L.Th width={40}>Prioridade</L.Th>
                  <L.Th width={10} alignCenter>
                    Action
                  </L.Th>
                </L.Tr>
              </L.Thead>
              <L.Tbody>
                {shoppingList.map((product, index) => (
                  <I.Tr key={index}>
                    <I.Td>{product.name}</I.Td>
                    <I.Td>{product.quantity}</I.Td>
                    <I.Td>
                      <S.SelectPriority
                        value={product.priority}
                        onChange={(event) =>
                          handlePriorityChangeInList(index, event)
                        }
                      >
                        <option value="">Seleciona a priodade</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                      </S.SelectPriority>
                    </I.Td>
                    <I.Td alignCenter>
                      <FaTrash onClick={() => deleteProduct()}></FaTrash>
                    </I.Td>
                  </I.Tr>
                ))}
              </L.Tbody>
            </L.Table>
          </L.ContainerTable>
        </L.Container>
      )}
    </>
  );
};

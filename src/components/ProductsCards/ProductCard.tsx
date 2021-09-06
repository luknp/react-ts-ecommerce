import React, { ChangeEvent } from 'react';
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from 'redux/slices/notificationSlice';
import { selectProductsState } from 'redux/slices/productsSlice';
import { ProductVariant, Product } from 'types';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import StarsRating from 'components/StarsRating';
import { push, remove } from 'redux/slices/shoppingCartSlice';
import Price from 'components/Price';
import './products-card.scss';

export const getArrayValue = (value: Array<number> | number, index?: number | null) => {
  if (Array.isArray(value)) {
    let pos = index || 0;
    if (pos > value.length) {
      pos = 0;
    }
    return value[pos];
  }
  return value;
};

export const getVariantsById = (variants: Array<ProductVariant>, id: number) => {
  const variant = variants.find(element => element.id === id);
  return variant;
};

export const getVariantProductFromVariantById = (variantsProducts: Array<Product>, id: number) => {
  const product = variantsProducts.find(element => element.id === id);
  return product;
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [variantsExpanded, setvariantsExpanded] = React.useState(false);
  const [parametersExpanded, setParametersExpanded] = React.useState(false);
  const [buy, setBuy] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const [productCnt, setProductCnt] = React.useState('1');

  const dispatch = useDispatch();
  const history = useHistory();

  const { variants, variantsProducts } = useSelector(selectProductsState);

  let p: Product = JSON.parse(JSON.stringify(product));
  let productVariant: ProductVariant | undefined | null = null;
  let variantSelectedIndex = null;
  if ((p?.variantsId || 0) > 0) {
    productVariant = getVariantsById(variants, p.variantsId as number);
    if (productVariant) {
      variantSelectedIndex = productVariant.productsId.findIndex(id => id === product.id);
    }
  }

  const [variantSelected, setVariantSelected] = React.useState(variantSelectedIndex);
  if (variantSelected !== null && productVariant) {
    const productIdToDisplay = productVariant.productsId[variantSelected];
    if (productIdToDisplay === product.id) {
      p = product;
    } else {
      p = getVariantProductFromVariantById(variantsProducts, productIdToDisplay) as Product;
    }
  }

  dispatch(
    push({
      productId: p.id,
      amount: 2,
    }),
  );

  const getProductCntInt = () => {
    return parseInt(productCnt, 10);
  };
  const setProductCntInt = (cnt: number) => {
    setProductCnt(cnt.toString());
  };

  const handleAddProductCnt = () => {
    if (checkProductAmount(getProductCntInt() + 1)) {
      setProductCntInt(getProductCntInt() + 1);
    }
  };

  const handleRemoveProductCnt = () => {
    const int = getProductCntInt();
    if (int > 0) {
      setProductCntInt(int - 1);
    }
  };
  const handlevariantsExpanded = () => {
    setvariantsExpanded(!variantsExpanded);
  };
  const handleParametersExpanded = () => {
    setParametersExpanded(!parametersExpanded);
  };

  const checkProductAmount = (amount: number): boolean => {
    if (variantSelected && amount > getArrayValue(p.available, variantSelected)) {
      dispatch(showNotification('Not enough products amount', 'error'));
      return false;
    }
    return true;
  };
  const handleProductCounterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    const { value } = e.target;
    if (value === '' || re.test(value)) {
      setProductCnt(value);
      checkProductAmount(getProductCntInt());
    }
  };
  const handleBuy = () => {
    if (checkProductAmount(getProductCntInt())) {
      setBuy(!buy);
      if (!buy) {
        dispatch(
          push({
            productId: p.id,
            amount: getProductCntInt(),
          }),
        );
      } else {
        dispatch(remove(p.id));
      }

      const message = !buy ? 'Added to the shopping cart' : 'Removed from the shopping cart';
      dispatch(showNotification(message, 'success'));
    }
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
    const message = !favorite ? 'Added to the favorites' : 'Removed from the favorites';
    dispatch(showNotification(message, 'success'));
  };

  const handleVariantSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { classList } = e.currentTarget;
    const index = classList[classList.length - 1];
    setVariantSelected(parseInt(index, 10));
  };

  const variantsRender = () => {
    if (!productVariant) {
      return <></>;
    }
    return (
      <div className='variants-container'>
        <div className='variants'>
          {productVariant.shortDesc.map((variant, index) => (
            <div
              onClick={handleVariantSelect}
              key={variant}
              className={clsx('variant', index === variantSelected && 'active', index.toString())}
            >
              {variant}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const parametersRender = () => {
    if (!p.parameters) {
      return <></>;
    }
    return (
      <div className='parameters'>
        <ul>
          {p.parameters.map(parameter => (
            <li key={parameter}>{parameter}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='product-list-root-container'>
      <div className='photo-container'>
        <img src={p.photo} alt='' className='photo' />
      </div>
      <div className='info-container'>
        <div className='info'>
          <p onClick={() => history.push(`shop/products/${p.id}`)} className='product-name'>
            {p.name}
          </p>
          <div className='rating'>
            <StarsRating rating={p.rating} />
            {p.opinions.length && <a href='http://'>{`Opinie (${p.opinions.length})`}</a>}
          </div>

          <div className='extra-info'>
            {variantsRender()}
            {parametersRender()}
          </div>
        </div>
        <div className='price-actions-container'>
          <Price
            price={getArrayValue(p.price, variantSelected)}
            currency={p.currency}
            promotionPrice={getArrayValue(p.promotion, variantSelected)}
          />
          <div className='actions shopping-cart-row'>
            {getArrayValue(p.available, variantSelected) > 0 ? (
              <>
                <div className='buy-counter'>
                  <div className='bc-remove' onClick={handleRemoveProductCnt}>
                    <RemoveIcon />
                  </div>
                  <input className='bc-label' type='text' name='name22' value={productCnt} onChange={e => handleProductCounterChange(e)} />
                  <div className='bc-add' onClick={handleAddProductCnt}>
                    <AddIcon />
                  </div>
                </div>
                <div className={clsx('circle-icon', 'buy', buy && 'active')} onClick={() => handleBuy()}>
                  {buy ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
                </div>
              </>
            ) : (
              <div className='submitArequest'>
                <p>UNAVAILBLE</p>
                <a href='http://'>Submit a request</a>
              </div>
            )}
            <div className={clsx('circle-icon', 'favorite', favorite && 'active')} onClick={handleFavorite}>
              {favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </div>
          </div>
          <div className='action-button'>
            <Button variant='contained' color='primary' onClick={handleBuy} startIcon={<ShoppingCartIcon />}>
              Buy
            </Button>
            <div className='space' />
            <Button variant='contained' color='primary' onClick={handleFavorite} startIcon={<FavoriteIcon />}>
              Favorite
            </Button>
          </div>
        </div>
        <div className='more-container'>
          {productVariant && (
            <div className={clsx('more', variantsExpanded && 'active')} onClick={handlevariantsExpanded}>
              <p>VARIANTS</p>
              {!variantsExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </div>
          )}
          {p.parameters.length > 0 && (
            <div className={clsx('more', parametersExpanded && 'active')} onClick={handleParametersExpanded}>
              <p>PARAMETERS</p>
              {!parametersExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </div>
          )}
        </div>
        {parametersExpanded && parametersRender()}
        {variantsExpanded && variantsRender()}
      </div>
    </div>
  );
}

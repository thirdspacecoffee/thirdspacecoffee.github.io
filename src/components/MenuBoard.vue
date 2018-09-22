<template>
<div class="canvas menu-board">
  <b-container>
    <b-row>
      <b-col sm="3">
        <h4>COFFEE</h4>
        <hr/>
        <h5>BLACK</h5>
        <ul>
          <li v-for="(menuProduct, index) in coffee.black" :key="index">
            <span :id="'li-black-coffee-'+index" v-html="menuProduct.renderMenu()"/>
            <b-popover v-if="menuProduct.description != null"
                  :target="'li-black-coffee-'+index"
                  placement="top"
                  title="Description"
                  :triggers="popoverTrigger">
              {{ menuProduct.description }}
            </b-popover>
          </li>
        </ul>
        <h5>MILK</h5>
        <ul>
          <li v-for="(menuProduct, index) in coffee.milk" :key="index">
            <span :id="'li-milk-coffee-'+index" v-html="menuProduct.renderMenu()"/>
            <b-popover v-if="menuProduct.description != null"
                  :target="'li-milk-coffee-'+index"
                  placement="top"
                  title="Description"
                  :triggers="popoverTrigger">
              {{ menuProduct.description }}
            </b-popover>
          </li>
        </ul>
      </b-col>
      <b-col sm="3">
        <h4>NOT COFFEE</h4>
        <hr/>
        <ul>
          <li v-for="(menuProduct, index) in notCoffee" :key="index">
            <span :id="'li-not-coffee-'+index" v-html="menuProduct.renderMenu()"/>
            <b-popover v-if="menuProduct.description != null"
                  :target="'li-not-coffee-'+index"
                  placement="top"
                  title="Description"
                  :triggers="popoverTrigger">
              {{ menuProduct.description }}
            </b-popover>
          </li>
        </ul>
      </b-col>
      <b-col sm="3">
        <h4>BREAKFAST</h4>
        <em>Available until 11am</em>
        <hr/>
        <ul>
          <li v-for="(menuProduct, index) in breakfast" :key="index">
            <span :id="'li-breakfast-'+index" v-html="menuProduct.renderMenu()"/>
            <b-popover v-if="menuProduct.description != null"
                    :target="'li-breakfast-'+index"
                    placement="top"
                    title="Description"
                    :triggers="popoverTrigger">
              {{ menuProduct.description }}
            </b-popover>
          </li>
        </ul>
      </b-col>
      <b-col sm="3">
        <h4>LUNCH</h4>
        <em>Begins at 11am</em>
        <hr/>
        <ul>
          <li v-for="(menuProduct, index) in lunch" :key="index">
            <span :id="'li-lunch-'+index" v-html="menuProduct.renderMenu()"/>
            <b-popover v-if="menuProduct.description != null"
                   :target="'li-lunch-'+index"
                   placement="top"
                   title="Description"
                   :triggers="popoverTrigger">
              {{ menuProduct.description }}
            </b-popover>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
class MenuProduct {
  constructor (title, description) {
    this.title = title
    this.description = description
  }

  renderMenu () {
    var out = '<span>' + this.title + '</span>'
    return out
  }
}

class DrinkProduct extends MenuProduct {
  constructor (title, description, sizeOptions) {
    super(title, description)
    this.sizeOptions = sizeOptions
  }

  renderMenu () {
    if (this.sizeOptions != null) {
      var out = '<span>' + this.title + ' <em>(' + this.sizeOptions.join(', ') + ')</em>' + '</span>'
    }
    return out
  }
}

export default {
  name: 'MenuBoard',
  data () {
    return {
      popoverTrigger: 'hover',
      coffee: {
        black: [
          new DrinkProduct('Batch Brew', null, ['12oz', '16oz']),
          new DrinkProduct('Pour Over', null),
          new DrinkProduct('Americano', 'Available Iced', ['12oz', '16oz']),
          new DrinkProduct('Espresso', null),
          new DrinkProduct('Cold Brew', null, ['16oz']),
          new DrinkProduct('Cafe Au lait', null)
        ],
        milk: [
          new DrinkProduct('Macchiato', null, ['3oz']),
          new DrinkProduct('Cortado', null, ['4oz']),
          new DrinkProduct('Cappuccino', null, ['6oz']),
          new DrinkProduct('Flat White', null, ['8oz']),
          new DrinkProduct('Latte', 'Available Iced', ['12oz', '16oz']),
          new DrinkProduct('Bonner Brew', null)
        ]
      },
      notCoffee: [
        new DrinkProduct('Chai', 'Available Iced', ['12oz', '16oz']),
        new DrinkProduct('Hot Chocolate', null, ['12oz', '16oz']),
        new DrinkProduct('Steamer', null, ['12oz', '16oz']),
        new DrinkProduct('Smoothies', 'Peach, Mango, Blueberry, Strawberry', ['16oz']),
        new DrinkProduct('Espresso Milkshake', null, ['16oz']),
        new DrinkProduct('Iced Tea', null, ['16oz']),
        new DrinkProduct('Hot Tea', null),
        new DrinkProduct('Lemonade', null, ['16oz']),
        new DrinkProduct('Arnold Palmer', null, ['16oz'])
      ],
      breakfast: [
        new MenuProduct('Biscuits & Gravy', null),
        new MenuProduct('Toast', 'Cashew nut butter, Honey, and Banana on Wheat Bread.'),
        new MenuProduct('Breakfast Bite', 'Ham, Bacon, Egg, and Cheese, with Side of Fruit on Wheat Bread or Flour Wrap.'),
        new MenuProduct('Sausage Egg and Cheese Sandwich', null),
        new MenuProduct('Veggie Breakfast Bite', 'Egg, Spinach, Onion, Green Peppers, with Side of Fruit on Wheat Bread or Spinach Wrap')
      ],
      lunch: [
        new MenuProduct('Ham & Cheddar', 'Ham, Cheddar, Mayo on 8-Grain Wheat Bread, Served with Chips or Fruit'),
        new MenuProduct('Veggie Sandwich', 'Lettuce, Tomato, Cucumber, Onion, Roasted Red Peppers, Green Peppers, Hummus, Cilantro Lime Sauce on 8-Grain Wheat Bread.  Served with Chips or Fruit.'),
        new MenuProduct('All In Club', 'Ham, Turkey, Bacon, Monterey Jack, Pepper Jack, Spinach, Lettuce, Tomato, Onion, Green Peppers, Cucumber, Roasted Red Peppers, Mesquite Mayo on 8-Grain Wheat Bread.  Served with Chips or Fruit.'),
        new MenuProduct('Turkey Avocado Sandwich', null)
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 15px;
}

.menu-board {
  min-height: 400px;
}

.menu-board li,
.menu-board ul {
  list-style-type: none;
  padding-left:0;
}

.menu-board li {
  padding-top: 3px;
}

h4 {
  font-family: Bradley Hand, sans-serif;
}

h5 {
  font-family: Bradley Hand, sans-serif;
}

</style>

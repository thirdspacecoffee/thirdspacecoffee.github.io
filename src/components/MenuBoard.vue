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
            <span :id="'li-black-coffee-'+index">
              {{ menuProduct.title }}
            </span>
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
            <span :id="'li-milk-coffee-'+index">
              {{ menuProduct.title }}
            </span>
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
            <span :id="'li-not-coffee-'+index">
              {{ menuProduct.title }}
            </span>
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
        <hr/>
        <ul>
          <li v-for="(menuProduct, index) in breakfast" :key="index">
            <span :id="'li-breakfast-'+index">
              {{ menuProduct.title }}
            </span>
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
        <hr/>
        <ul>
          <li v-for="(menuProduct, index) in lunch" :key="index">
            <span :id="'li-lunch-'+index">
              {{ menuProduct.title }}
            </span>
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
}

export default {
  name: 'MenuBoard',
  data () {
    return {
      popoverTrigger: 'hover',
      coffee: {
        black: [
          new MenuProduct('Batch Brew', null),
          new MenuProduct('Pour Over', null),
          new MenuProduct('Americano', null),
          new MenuProduct('Espresso', null),
          new MenuProduct('Cold Brew', null)
        ],
        milk: [
          new MenuProduct('Macchiato', null),
          new MenuProduct('Cortado', null),
          new MenuProduct('Cappuccino', null),
          new MenuProduct('Flat White', null),
          new MenuProduct('Latte', null),
          new MenuProduct('Bonner Brew', null)
        ]
      },
      notCoffee: [
        new MenuProduct('Chai', null),
        new MenuProduct('Hot Chocolate', null),
        new MenuProduct('Steamer', null),
        new MenuProduct('Smoothies', 'Peach, Mango, Blueberry, Strawberry'),
        new MenuProduct('Espresso Milkshake', null),
        new MenuProduct('Iced Tea', null),
        new MenuProduct('Hot Tea', null),
        new MenuProduct('Lemonade', null),
        new MenuProduct('Arnold Palmer', null)
      ],
      breakfast: [
        new MenuProduct('Biscuits & Gravy', null),
        new MenuProduct('Toast', 'Cashew nut butter, Honey, and Banana on Wheat Bread.'),
        new MenuProduct('Breakfast Bite', 'Ham, Bacon, Egg, and Cheese, with Side of Fruit on Wheat Bread or Flour Wrap.'),
        new MenuProduct('Veggie Breakfast Bite', 'Egg, Spinach, Onion, Green Peppers, with Side of Fruit on Wheat Bread or Spinach Wrap')
      ],
      lunch: [
        new MenuProduct('Ham & Cheddar', 'Ham, Cheddar, Mayo on 8-Grain Wheat Bread, Served with Chips or Fruit'),
        new MenuProduct('Veggie Sandwich', 'Lettuce, Tomato, Cucumber, Onion, Roasted Red Peppers, Green Peppers, Hummus, Cilantro Lime Sauce on 8-Grain Wheat Bread.  Served with Chips or Fruit.'),
        new MenuProduct('All In Club', 'Ham, Turkey, Bacon, Monterey Jack, Pepper Jack, Spinach, Lettuce, Tomato, Onion, Green Peppers, Cucumber, Roasted Red Peppers, Mesquite Mayo on 8-Grain Wheat Bread.  Served with Chips or Fruit.')
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

</style>

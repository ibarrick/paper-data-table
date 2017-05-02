# Paper-data-table
[![Build Status](https://travis-ci.org/ibarrick/paper-data-table.svg?branch=master)](https://travis-ci.org/ibarrick/paper-data-table)

Port of https://github.com/daniel-nagy/md-data-table using ember-paper

## Installation

  `ember install paper-data-table`

  Add `@import 'paper-data-table';` to your `app.scss` file.

## Usage
	From dummy app:
  ```hbs
{{#paper-data-table sortProp="name" sortDir="desc" selectable=true as |table|}}
  {{#table.head as |head|}}
    {{#head.column checkbox=true}}
      {{#paper-checkbox disabled=true onChange=null}}{{/paper-checkbox}}
    {{/head.column}}
    {{#head.column sortProp="name"}}Dessert (100g serving){{/head.column}}
    {{#head.column sortProp="calories" numeric=true}}Calories{{/head.column}}
    {{#head.column sortProp="fat" numeric=true}}Fat (g){{/head.column}}
    {{#head.column sortProp="carbs" numeric=true}}Carbs (g){{/head.column}}
    {{#head.column sortProp="protein" numeric=true}}Protein (g){{/head.column}}
    {{#head.column numeric=true}}Sodium (mg){{/head.column}}
    {{#head.column numeric=true}}Calcium (%){{/head.column}}
    {{#head.column numeric=true}}Iron (%){{/head.column}}
    {{#head.column}}Comment{{/head.column}}
  {{/table.head}}
  {{#table.body as |body|}}
    {{#each (sort-by table.sortDesc paginatedDesserts) as |dessert|}}
      {{#body.row edit=true as |row|}}
        {{#row.cell checkbox=true}}
          {{#paper-checkbox
            value=dessert.checked
            onChange=(action (mut dessert.checked))}}
          {{/paper-checkbox}}
        {{/row.cell}}
        {{#row.cell}}{{dessert.name}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.calories}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.fat}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.carbs}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.protein}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.sodium}}{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.calcium}}%{{/row.cell}}
        {{#row.cell numeric=true}}{{dessert.iron}}%{{/row.cell}}
        {{#row.cell edit=true as |cell|}}
          {{#if cell.showEdit}}
            {{#cell.edit-dialog onClose=cell.toggleEdit}}
              {{paper-input
                value=dessert.comment
                onChange=(action (mut dessert.comment))}}
            {{/cell.edit-dialog}}
          {{else}}
            {{dessert.comment}}
            {{#paper-button iconButton=true onClick=row.toggleEdit}}
              {{paper-icon 'edit'}}
            {{/paper-button}}
          {{/if}}
        {{/row.cell}}
      {{/body.row}}
    {{/each}}
  {{/table.body}}
{{/paper-data-table}}
{{paper-data-table-pagination
  limit=limit
  limitOptions=limitOptions
  page=page
  pages=pages
  onChangePage=(action (mut page))
  onChangeLimit=(action (mut limit))
  onIncrementPage=(action 'incrementPage')
  onDecrementPage=(action 'decrementPage')}}
```

# React final-form bootstrap 3 components

With this final-form-bootsrap3 package you can create simple and more complex forms in jsx.

## Available components

- Checkbox
- Custom
- DropZone
- PassWord
- Radio
- Select
- Show
- Text

## Api

### Checkbox

#### Single checkbox

```typescript jsx
<Checkbox name="checkbox" label="Checkbox label" help="click this checkbox">
  Click me!
</Checkbox>
```

| Attribute  | Type                                   | required | Default value | Description                                                               |
| ---------- | -------------------------------------- | -------- | ------------- | ------------------------------------------------------------------------- |
| `name`     | `string`                               | `yes`    | -             | name of the field, this will be used for initial values and submit values |
| `label`    | `string`                               | `no`     | -             | will show input label                                                     |
| `help`     | `string`                               | `no`     | -             | display helper text                                                       |
| `children` | `array`, `string`, `object` ,`element` | `no`     | -             | show text behind checkbox                                                 |

#### Single checkbox custom return value

```typescript jsx
<Checkbox name="checkbox" label="Checkbox label" help="click this checkbox">
  <option value="mango">I will return a mango</option>
</Checkbox>
```

#### Multiple checkbox filter and show over two columns

```typescript jsx
<Checkbox
  name="checkbox"
  label="Checkbox label"
  help="click this checkbox"
  filter
  placeholderFilter="Filter mango`s"
  columns={2}
>
  <option value="1">Mango 1</option>
  <option value="2">Mango 2</option>
  <option value="3">Mango 3</option>
  <option value="4">Mango 4</option>
  <option value="5">Mango 5</option>
</Checkbox>
```

```typescript jsx
<checkbox />
```

| Attribute           | Type      | Required | Default value | Description                                                               |
| ------------------- | --------- | -------- | ------------- | ------------------------------------------------------------------------- |
| `name`              | `string`  | `yes`    | -             | name of the field, this will be used for initial values and submit values |
| `label`             | `string`  | `no`     | -             | will show input label                                                     |
| `help`              | `string`  | `no`     | -             | display helper text                                                       |
| `filter`            | `boolean` | `no`     | `false`       | can we filter the checkboxes                                              |
| `placeholderFilter` | `string`  | `no`     | `Filter`      | can we filter the checkboxes                                              |
| `columns`           | `number`  | `no`     | `1`           | amount of columns                                                         |
| `help`              | `string`  | `no`     | -             | display helper text                                                       |
| `children`          | `option`  | `no`     | -             | show text behind checkbox and contains the return custom value            |

```typescript jsx
<option />
```

| Attribute | Type                                   | Required | Description                            |
| --------- | -------------------------------------- | -------- | -------------------------------------- |
| value     | `string`, `number`                     | yes      | value that will be set when clicked    |
| children  | `array`, `string`, `object`, `element` | yes      | value that is shown after the checkbox |

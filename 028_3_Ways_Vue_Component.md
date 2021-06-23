## 028 Three Ways of using Component

1. Using JS Object
```javascript
  export default {data, props, methods, created,...}
```

2. Using TS Class ```<script lang="ts">```
```typescript
  @Component
  export default class XXXX extends Vue{
    xxxx: string = 'hi'
    @Prop(Number) xxxx: number | undefined;
  }
```

3. Using JS Class ```<script  lang="js">```
```javascript
  @Component
  export default class XXX extends Vue{
    xxx = "hi"
  }
```
# Var, Let and Const

### var:
  - scope: **global** and **local**
  - can be **redefined** and **reassigned**
  - hoisted **with** initial value of **"undefined"**

### let:
  - scope: global, local and **block**
  - can **not** be **redefined** but can be reassigned
  - hoisted **without** initial value

### const:
  - scope: global, local and block
  - can *not* be redefined *and* can **not** be **reassigned**
  - hoisted without initial value


## Conclusion
`var` is different from `let` because:
  - it does not have block scope
  - it can be redefined
  - hoisted with initial value of "undefined"

`const == let` except the fact that it is **immutable**

## keys:

### block scope
js code included inside `{}` such as if-block, switch-block, for-block, while-block . . .

e.g:



#### credit: https://www.youtube.com/watch?v=Gd_JG3e1g4A
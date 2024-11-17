# 1. (types) - someNameTypes.ts || someName.ts - типизация сущности + типизация стейта в для какого-либо стейт менеджера

# 2. (actionTypes) - someNameActionTypes.ts - enum со строками которые будут использоваться в actionCreators и reducer для идентифицации действия которое будет с диспатча отправлено в редюсер.

# 3. (types) - someNameActions.ts - типизация action[объект у которого есть type и payload]

# 4. (actionCreators) - someNameActionCreators.ts - функция ,которая вызывается в dispatch и которая может принимать какой-либо payload и возвращает объект action , нужно для того чтобы вручную каждый раз не писать объект и не вспоминать какие у нас есть actionTypes + в actionCreators мы можем сделать типизацию нашего payload

# 5. (reducer) - someNameReducer.ts - чистая функция которая принимает state и action и возвращает новый иммутабельный state

# 6 (app/config/store/stateSchema.ts) - тут добавляем типизацию стейта который мы передаем в редюсер

# 7 (app/config/store/createReduxStore.ts) - добавляем наш редюсер в объект reducers

# 8 (selectors) - функция которая принимает стейт ,и возвращает часть того стейта который нам нужен ,и который отслеживается в компоненте когда мы получаем стейт с помощью хука useSelector которому передаем наш selector

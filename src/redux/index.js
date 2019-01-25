//生成store容器

import { createStore } from 'redux';
import Reducers from './reducers';

export default function configureStore(initialState) {
    const store = createStore(Reducers,initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}
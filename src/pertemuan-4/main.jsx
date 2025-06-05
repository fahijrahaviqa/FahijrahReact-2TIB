import { createRoot } from 'react-dom/client'
import './tailwind.css';
import FrameworkListSearchFilter from './FrameworkListSearchFilter';
import ResponsiveDesign from './Responsive';
import ProductListSearchFilter from './ProductListSearchFilter';

createRoot(document.getElementById('root'))
    .render(
        <div>
            <ProductListSearchFilter/>
            <ResponsiveDesign/>
        </div>
    )
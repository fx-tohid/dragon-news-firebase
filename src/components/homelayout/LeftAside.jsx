import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            {/* Left Aside */}
            <Suspense fallback={<span className="loading loading-spinner loading-3xl"></span>}>
                <Categories/>
            </Suspense>
        </div>
    );
};

export default LeftAside;
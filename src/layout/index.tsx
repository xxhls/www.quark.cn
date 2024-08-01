import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'


const LayoutView: React.FC<{
    header: React.ReactNode;
    main: React.ReactNode;
    footer: React.ReactNode;
}> = ({ header, main, footer }) => {
    return (
        <div className={classNames('w-screen', styles.layout)}>
            {header}
            {main}
            {footer}
        </div>
    )
}

export default LayoutView

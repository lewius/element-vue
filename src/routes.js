import HelloWorld from './components/HelloWorld'
import Table from './components/Table'
import Form from './components/Form'
import Transfer from './components/Transfer'
import Dashboards from './components/Dashboards'
import Upload from './components/Upload'
import Richtext from './components/Richtext'

export default [
    {
        path: '/',
        component: Dashboards
    },
    {
        path: '/table',
        component: Table
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/transfer',
        component: Transfer
    },
    {
        path: '/dashboards',
        component: Dashboards
    },
    {
        path: '/upload',
        component: Upload
    },
    {
        path: '/richtext',
        component: Richtext
    }
];

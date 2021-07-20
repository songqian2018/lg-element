Storybook 安装
自动安装
    npx -p @storybook/cli sb init --type vue
    yarn add vue
    yarn add vue-loader vue-template-compiler --dev



开启 yarn 工作区

项目根目录的 package.json {
    "private": true,
    "workspaces": [
        "packages/*"
    ]
}


yarn workspaces 使用

    给工作区根目录安装开发依赖
        yarn add jest -D -W

    给指定工作区安装依赖
        yarn workspace lg-button add lodash@4
        yarn workspace lg-form add lodash@4

    给所有的工作区安装依赖
        yarn install


Lerna 使用

    全局安装
        yarn global add lerna

    初始化
        lerna init

    发布
        lerna publish



    git remote add origin https://github.com/songqian2018/lg-element.git

    git push -u origin master



    npm whoami


    npm adduser

    npm config get registry

    yarn lerna

    npm login


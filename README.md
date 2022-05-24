# WORKOUT SCHEDULE BACK

## Description:

TODO Description......
## Technologies used:
- Nodejs
- Lambda
- GraphQl
- AppSync
- Aurora RDS ( POSTGRESQL)
- Others AWS Services ( CloudWatch/VPC/Security Groups....)
## PrereRequisites:

- NodeJs
- Aws CLI
- Insominia ( Tests)

## Instalation:

```
npm install
```
## 🚀 SECURITY GROUP

####

```
aws cloudformation create-stack --template-body file://./aws/security-group/database-security-group.template.yml --stack-name [NOME DA STACK] --profile [profile-name]
```

## 🔨 Build Aplication

```
npm run package:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## 🚀 Deploy Aplication

We are using serverless-webpack this follow command will build and deploy the application in a specific stack:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## 🏃 RUN/TEST

Test:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

To Debug use insominia

### Organizations

[RICHNESSCORP](https://www.nossosite.com.br/)

## 🤝 Code Contributors

👤 **Leandro Almeida**
👤 **Rodrigo Gonçalves**
👤 **Fillipo Maio**

## 📝 License

Copyright © 2019 [RICHNESSCORP](https://www.nossosite.com.br/)
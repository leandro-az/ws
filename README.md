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
## π SECURITY GROUP

####

```
aws cloudformation create-stack --template-body file://./aws/security-group/database-security-group.template.yml --stack-name [NOME DA STACK] --profile [profile-name]
```

## π¨ Build Aplication

```
npm run package:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## π Deploy Aplication

We are using serverless-webpack this follow command will build and deploy the application in a specific stack:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

## π RUN/TEST

Test:

```
npm run deploy:(stack-tag)
```

The stack-tag can be: [dev,homolog,prd]

To Debug use insominia

### Organizations

[RICHNESSCORP](https://www.nossosite.com.br/)

## π€ Code Contributors

π€ **Leandro Almeida**
π€ **Rodrigo GonΓ§alves**
π€ **Fillipo Maio**

## π License

Copyright Β© 2019 [RICHNESSCORP](https://www.nossosite.com.br/)
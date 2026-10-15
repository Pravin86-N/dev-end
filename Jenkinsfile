pipeline{
    agent any

    stages{
        stage('Checkout'){
            steps{
                git branch : 'main',
                url : ''
            }
        }
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}
pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build 1') {
          steps {
            echo 'Building 1'
            sh '''npm install && \\
npm run build'''
          }
        }

        stage('Build 2') {
          steps {
            echo 'Building 2'
          }
        }

      }
    }

    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Building'
          }
        }

        stage('Jest') {
          steps {
            sh 'npm run test'
          }
        }

        stage('Jest 2') {
          steps {
            sh 'npm run test'
          }
        }

      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }

  }
}
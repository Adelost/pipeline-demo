pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build 1') {
          steps {
            echo 'Building 1'
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
      steps {
        echo 'Building'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }

  }
}
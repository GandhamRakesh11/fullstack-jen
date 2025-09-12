pipeline {
    agent any
    environment {
        APP_NAME = "fullstack-app"
        FRONTED_DIR = "frontend"
        BACKEND_DIR = "backend"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }
    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/GandhamRakesh11/fullstack-jen.git'
            }
        }
        stage('Build & Deploy') {
            steps {
                dir('Fullstack-app') {
                    sh 'docker-compose -f docker-compose.yml build --no-cache'
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
   post {
    always {
        sh '''
            docker system prune -a -f
            docker volume prune -f
        '''
    }
 }
}

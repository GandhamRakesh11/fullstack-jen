pipeline {
    agent any

    environment {
        APP_NAME = "fullstack-app"
        FRONTEND_DIR = "frontend"
        BACKEND_DIR = "backend"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/GandhamRakesh11/fullstack-jen.git'
            }
        }

        stage('Build Frontend') {
            when {
                changeset "${FRONTEND_DIR}/**"
            }
            steps {
                dir('Fullstack-app') {
                    sh 'docker-compose build frontend'
                    sh 'docker-compose up -d frontend'
                }
            }
        }

        stage('Build Backend') {
            when {
                changeset "${BACKEND_DIR}/**"
            }
            steps {
                dir('Fullstack-app') {
                    sh 'docker-compose build backend'
                    sh 'docker-compose up -d backend'
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

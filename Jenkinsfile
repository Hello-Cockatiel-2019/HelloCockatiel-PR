pipeline{
  agent any
  stages {
        stage('dev'){
            when {branch 'develop'}
            steps{
            sh' ssh cockatiel@103.86.50.70 " pm2 delete ${JOB_NAME} || : " '
            sh' ssh cockatiel@103.86.50.70 " mkdir -p /home/cockatiel/${JOB_NAME} " '
            sh' ssh cockatiel@103.86.50.70 " rm -rf /home/cockatiel/${JOB_NAME}/* || : " '
            sh' scp -r * cockatiel@103.86.50.70:/home/cockatiel/${JOB_NAME} '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn && pm2 start yarn --name "${JOB_NAME}" -- dev " '
            }
        }
        stage('master'){
            when {branch 'master'}
            steps{
            sh' ssh cockatiel@103.86.50.70 " pm2 delete ${JOB_NAME} || : " '
            sh' ssh cockatiel@103.86.50.70 " mkdir -p /home/cockatiel/${JOB_NAME} " '
            sh' ssh cockatiel@103.86.50.70 " rm -rf /home/cockatiel/${JOB_NAME}/* || : " '
            sh' scp -r * cockatiel@103.86.50.70:/home/cockatiel/${JOB_NAME} '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn " '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && yarn build " '
            sh' ssh cockatiel@103.86.50.70 " cd /home/cockatiel/${JOB_NAME} && pm2 start serve --name "${JOB_NAME}" -- -l 5000 -s build " '
            }
        }
  }
}

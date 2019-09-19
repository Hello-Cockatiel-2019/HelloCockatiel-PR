pipeline{
  agent any
  stages {
   	stage('dev'){
			steps{
				sh('printenv | sort')
			sh 'echo "============= [ Step : Production. [3/3] ] ===================================="'
			sh 'echo "============= [ Production [3/3] - Deleteing old project ] ===================="'
			sh 'echo "============= [ Production [3/3] - Stoping Old Production ] ==================="'
			sh 'echo "============= [ Production [3/3] - pull at Production Server ] ================"'
			sh 'echo "============= [ Production [3/3] - Install at Production Server ] ================"'
			sh 'echo "============= [ Production [3/3] - Starting Server ] =========================="'
			sh 'echo "==============================================================================="'
			}
    }
  }
}

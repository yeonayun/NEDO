git올리고 고치는데 참고할 메모입니당.. 요걸루 git 익혀보쟈긔 
git 문제 해결하거나 그러면 요기에 메모해서 공유 뭐 그렁ㄱ러..


*중요*
1. commit은 평소에 꾸준히 해두기
    - 오른쪽 밑에 powershell +를 눌러서 git bash를 실행시킨후에 해주기 ( commit이랑 push를 할때는 git bash에서 해줘봥 )

2.  ***제일 중요*** push할때는 서로 꼭 알려주깅 
    - pr 날리때도 꼭 알려주고 pr을 하면 밑에 병합하기나 merge나 초록 버튼이 나와서 누를때도 말해주기

깃허브는 아무이상 없다면
3. terminal에서 git pull origin main이라고 해야 내 vscode에도 깃허브에 올라온게 보여용..



변경 사항을 저장하고 commit, push를 해야할때
    git add .
    git commit -m "커밋 메시지"
    git push origin main

        git add .
        -> 이거는 변경사항 모든걸 commit하기 위해서 쓰는거
        git add 특정 파일
        -> index.html 생성했으면 git add index.html
        git push origin main
        pr을 날릴 수 있는 push 방법 팀 작업 할때는 요걸 권장한대

만약 깃허브에 업로드를 했는데 안뜬다
    git status
        현재 깃 상황을 보는 것 -> 이걸보구 gpt한테 물어본다 그리고 꼭 나한테 상황알려주깅

파일 동기화 ( 깃허브에 아무이상없이 서로 한거 잘 올라왔으면 vscode에도 똑같이 보여야하니까 마지막 단걔로 해주는 거)
    -> main은 branch이름 ( 혹시나 master로 돼있다거나 그러면 말해주기 )
    git pull origin main
    



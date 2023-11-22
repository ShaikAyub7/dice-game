#include<stdio.h>
// #include<conio.h>


 int main() {
    struct student {
        char name [20];
        int s1;
        int s2;
        int s3;
        int tot;
        float avg;
        char res[6];

    }stu;
    printf("enter name");
    scanf("%s", stu.name);
    printf("enter s1,s2 and s3 marks");
    scanf("%d %d %d", &stu.s1,&stu.s2,&stu.s3);
    stu.tot= stu.s1 +stu.s2+stu.s3;
    stu.avg = stu.tot/3;
    if(stu.avg>=40) strcpy(stu.res,"pass");
    else strcpy(stu.res,"fail");
    printf("name : %S",stu.name);
    printf("total : %d",stu.tot);
    printf("avg : %f", stu.avg);
    printf("RESULTS",stu.res);
    return 0;
}
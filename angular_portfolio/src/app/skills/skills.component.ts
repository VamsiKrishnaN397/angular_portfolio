import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // Web Application Development
  public wad = [
    {sno: 1, imgCaption: "HTML 5", url: "./assets/html.png"},
    {sno: 2, imgCaption: "CSS 3", url: "./assets/css.png"},
    {sno: 3, imgCaption: "Bootstrap 5", url: "./assets/bootstrap.png"},
    {sno: 4, imgCaption: "React 18", url: "./assets/react.png"},
    {sno: 5, imgCaption: "Angular 19", url: "./assets/angular.png"},
    {sno: 6, imgCaption: "Angular Material 19", url: "./assets/angularMaterial.png"},
    {sno: 7, imgCaption: "Kendo UI", url: "./assets/kendo.png"},
    {sno: 8, imgCaption: "Dev Extreme", url: "./assets/devExtreme.png"},
    {sno: 9, imgCaption: ".Net Framework", url: "./assets/netFramework.png"},
    {sno: 10, imgCaption: ".Net Core 6.0", url: "./assets/netCore.png"},
    {sno: 11, imgCaption: "Linq to Sql", url: "./assets/linq.png"},
    {sno: 12, imgCaption: "Entity Framework", url: "./assets/entity.png"},
    {sno: 13, imgCaption: "JavaScript", url: "./assets/javascript.png"},
    {sno: 14, imgCaption: "TypeScript", url: "./assets/typescript.png"},
    {sno: 15, imgCaption: "JQuery", url: "./assets/jquery.png"},
    {sno: 16, imgCaption: "MySql", url: "./assets/mysql.png"},
    {sno: 17, imgCaption: "Microsoft Sql Server", url: "./assets/mssql.png"},
    {sno: 18, imgCaption: "Tailwind CSS", url: "./assets/tailwind.png"},
    {sno: 19, imgCaption: "Fast API", url: "./assets/fastapi.png"}
  ]

  // Programming Languages
  public pl = [
    {sno: 1, imgCaption: "C", url: "./assets/c.png"},
    {sno: 2, imgCaption: "Java", url: "./assets/java.png"},
    {sno: 3, imgCaption: "Python 3.X", url: "./assets/python.png"},
    {sno: 4, imgCaption: "C#", url: "./assets/csharp.png"},
    {sno: 5, imgCaption: "Entity Framework", url: "./assets/entity.png"},
  ]

  // Testing tools
  public tt = [
    {sno: 1, imgCaption: "Postman", url: "./assets/postman.png"},
    {sno: 2, imgCaption: "Swagger", url: "./assets/swagger.png"}
  ]

  // Deployment Services
  public ds = [
    {sno: 1, imgCaption: "AWS Cloud", url: "./assets/aws.png"},
    {sno: 2, imgCaption: "Github", url: "./assets/github.png"},
    {sno: 2, imgCaption: "Microsoft Azure", url: "./assets/azure.png"}
  ]

  // Operating Systems
  public os = [
    {sno: 1, imgCaption: "Windows", url: "./assets/windows.png"},
    {sno: 2, imgCaption: "Mac", url: "./assets/mac.png"},
    {sno: 3, imgCaption: "Linux", url: "./assets/linux.png"},
    {sno: 4, imgCaption: "Unix", url: "./assets/unix.png"}
  ]

  // Machine Leanring and Deep Learning
  public mdl = [
    {sno: 1, imgCaption: "Scikit Learn", url: "./assets/scikit.png"},
    {sno: 2, imgCaption: "PyTorch", url: "./assets/pytorch.png"},
    {sno: 3, imgCaption: "Open CV", url: "./assets/opencv.png"},
    {sno: 4, imgCaption: "Numpy", url: "./assets/numpy.png"},
    {sno: 5, imgCaption: "Pandas", url: "./assets/pandas.png"},
    {sno: 6, imgCaption: "Matplotlib", url: "./assets/matplotlib.png"},
    {sno: 7, imgCaption: "Seaborn", url: "./assets/seaborn.png"},
    {sno: 8, imgCaption: "Claude AI Model", url: "./assets/claude.png"},
  ]

  // Others
  public others = [
    {sno: 1, imgCaption: "VS Code", url: "./assets/vscode.png"},
    {sno: 2, imgCaption: "Visual Studio", url: "./assets/vs.png"},
    {sno: 3, imgCaption: "Microsoft Sql Server Management System", url: "./assets/ssms.png"},
    {sno: 4, imgCaption: "Python Idle", url: "./assets/idle.png"},
    {sno: 5, imgCaption: "Microsoft Office 365", url: "./assets/office.png"},
    {sno: 6, imgCaption: "PyCharm", url: "./assets/pycharm.png"},
    {sno: 7, imgCaption: "Amazon Dynamo Database and S3 Buckets", url: "./assets/amazons3.png"},
  ]

  // Soft Skills
  public ss = [
    {sno: 1, imgCaption: "Communication Skills", url: "./assets/communication.png", description: "My ability to convey thoughts, ideas, and information effectively through verbal, written, or nonverbal means, fostering understanding and connection with others."},
    {sno: 2, imgCaption: "Team Work", url: "./assets/teamwork.png", description: "Collaborative effort among individuals contributing  towards a common goal, fostering synergy and achievement."},
    {sno: 3, imgCaption: "Quick Learner", url: "./assets/quicklearner.png", description: "Easily grasps new concepts, adapts rapidly to change, and efficiently acquires new skills or knowledge with minimal instruction or guidance."},
    {sno: 4, imgCaption: "Adaptive to Environment", url: "./assets/adaptive.png", description: "Possessing the ability to adjust and thrive in changing environments, demonstrating flexibility, resilience, and problem-solving skills."},
    {sno: 5, imgCaption: "Presentational Skills", url: "./assets/presentation.png", description: "capacity to effectively deliver information, ideas, or messages to the audience"},
    {sno: 6, imgCaption: "Active Participation Skills", url: "./assets/participation.png", description: "Engaging fully in discussions, activities, or projects by contributing ideas, sharing perspectives thus enhancing productivity, learning"}
  ]
}

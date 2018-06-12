import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { ComponentFactory } from '@angular/core/src/linker/component_factory';
import { ViewEncapsulation } from '@angular/core';
import { RandomNumberService } from '../../services/random-number.service';

@Component({
  selector: 'app-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlockContainerComponent implements OnInit {
  public constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _random: RandomNumberService
  ) {}

  @ViewChild('cubesContainer', { read: ViewContainerRef })
  public blocksContainer: ViewContainerRef;

  private _blockComponents = new Array<ComponentRef<BlockComponent>>();
  private _blockComponentFactory: ComponentFactory<BlockComponent>;

  public ngOnInit(): void {
    this._blockComponentFactory = this._componentFactoryResolver.resolveComponentFactory(
      BlockComponent
    );
  }

  public addCube(): void {
    const blockComponent = this.blocksContainer.createComponent(
      this._blockComponentFactory,
      this._blockComponents.length
    );
    this._blockComponents.push(blockComponent);
    blockComponent.instance.title = `Cube N : ${this._blockComponents.length}`;
    blockComponent.instance.click.subscribe(this.onBlockClicked);
  }

  public onBlockClicked(title: string): void {
    console.log('clicked block with title : ', title);
  }

  public removeCube(): void {
    if (this._blockComponents.length > 0) {
      const lastBlockComponent = this._blockComponents.pop();
      lastBlockComponent.destroy();
    }
  }

  public swapCubes(): void {
    if (this._blockComponents.length < 2) {
      return;
    }
    const indexOfSourceBlock = this._random.between(
      0,
      this._blockComponents.length
    );
    const indexOfTargetBlock = this._random.between(
      0,
      this._blockComponents.length
    );

    console.log(
      'source  ',
      indexOfSourceBlock,
      ' target : ',
      indexOfTargetBlock
    );

    this.blocksContainer.move(
      this._blockComponents[indexOfSourceBlock].hostView,
      indexOfTargetBlock
    );
  }
}
